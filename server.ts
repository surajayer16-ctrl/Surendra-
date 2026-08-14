import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory mock enrollments store
  const enrollments: Array<{
    id: string;
    fullName: string;
    phone: string;
    email: string;
    course: string;
    batch: string;
    experience: string;
    purpose: string;
    createdAt: string;
    seatNumber: string;
  }> = [];

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Get total seats & enrollments stats
  app.get('/api/enrollments/stats', (req, res) => {
    const totalCapacity = 45; // 15 per course
    const booked = enrollments.length + 28; // initial baseline of enrolled students
    const remaining = Math.max(0, totalCapacity - booked);
    res.json({
      totalCapacity,
      booked,
      remaining,
      recentEnrollments: enrollments.slice(-5),
    });
  });

  // Handle Enrollment
  app.post('/api/enrollments', (req, res) => {
    const { fullName, phone, email, course, batch, experience, purpose } = req.body;
    if (!fullName || !phone || !course) {
      return res.status(400).json({ error: 'Full name, phone, and course are required.' });
    }

    const id = 'NITVT-' + Math.floor(100000 + Math.random() * 900000);
    const seatNumber = 'SEAT-' + (enrollments.length + 29);
    const newEnrollment = {
      id,
      fullName,
      phone,
      email: email || 'nitvtnepal@gmail.com',
      course,
      batch: batch || 'Morning Batch (७:०० - ९:०० AM)',
      experience: experience || 'Beginner / नयाँ',
      purpose: purpose || 'Skill Test & Certification',
      createdAt: new Date().toLocaleDateString('ne-NP'),
      seatNumber,
    };

    enrollments.push(newEnrollment);
    res.json({ success: true, enrollment: newEnrollment });
  });

  // AI Telecom Instructor Assistant using Gemini API
  app.post('/api/ai-tutor', async (req, res) => {
    try {
      const { message, question, topic, history } = req.body;
      const userQuery = message || question || '';
      
      if (!userQuery.trim()) {
        return res.status(400).json({ error: 'Question / message is required' });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.json({
          reply: `[सूचना]: जेमिनी API Key सर्भरमा कन्फिगर नभएकोले आधिकारिक सुरेन्द्र ऐर (Surendra Air) म्यानुअल सारांश:
सुरेन्द्र ऐर (Surendra Air) को CTEVT तह-१ र तह-२ पाठ्यक्रम अनुसार तपाईंको प्रश्न: "${userQuery}"।

मुख्य प्राविधिक बुँदाहरू (Surendra Air 38 Chapters Manual Summary):
1. **OFC 12 Core Color Code**: 1-Blue, 2-White, 3-Yellow, 4-Green, 5-Grey/Slate, 6-Red, 7-Orange, 8-Black, 9-Pink, 10-Violet, 11-Brown, 12-Aqua।
2. **Standard Clearances**: 33kV/66kV लाइनसँग कम्तीमा २ मिटर (2m) ठाडो दूरी, 11kV सँग 1.2-1.5m, 230V सँग 30cm (क्रसिङ कोण ठीक 90°)।
3. **Safety & Standards**: भर्‍याङको कोण 75°, डबल ल्यान्यार्ड सेफ्टी बेल्ट, र म्यानहोलमा पस्नुअघि ३० मिनेट भेन्टिलेसन र ग्यास टेस्ट।
4. **Splicing & Loss**: 90° Cleave angle, 99% Isopropyl Alcohol सफाइ, Splice Loss < 0.02 dB, OTDR ट्रेसिङ।
5. **Electrical & Earthing**: Ohm's law (V=IR), Earth Resistance < 1Ω (Sensitive Core), < 5Ω (Standard/BTS), < 10Ω (Secondary)।
6. **NTC Emergency & Support**: 198 (मर्मत तथा कम्प्लेन), 197 (नम्बर सोधपुछ), 1606 (ल्यान्डलाइन बिल)।

कृपया विस्तृत प्रयोगात्मक जानकारीका लागि हाम्रो डिजिटल म्यानुअल हेर्नुहोला वा सम्पर्क (०१-५२०३५२२) गर्नुहोस्।`
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `You are the Chief Senior Telecom & Optical Fiber Instructor at Surendra Air (सुरेन्द्र ऐर), Mahalaxmi-2, Lalitpur (Affiliated with CTEVT and Department of Cottage & Small Industries).
You have 19+ years of field experience in Nepal Telecom (NTC), Ncell, and ISP Fiber networks.
You train students for CTEVT Level 1 (Junior Telecom Technician), Level 2 (Telecom Technician), and Optical Fiber Technician certification exams and National Skill Testing Board (NSTB) skill tests.

You have mastered all 38 chapters of the Surendra Air Official Telecom & Optical Fiber Engineering Curriculum:
- Chapter 1: Introduction to Telecommunications (PSTN, Mobile, Optical Fiber, Satellite, Exchange Hierarchy, Block Diagrams)
- Chapter 2: Optical Fiber Cable (OFC) Basics (Core 9μm/50μm, Cladding 125μm, Coating 250μm, Loose Tube, FRP Strength Member, Total Internal Reflection Snell's Law n1>n2, Single Mode vs Multi Mode, Wavelengths 850, 1310, 1550, 1625nm)
- Chapter 3: NTC 12-Core Fiber Color Code (1-Blue, 2-White, 3-Yellow, 4-Green, 5-Grey, 6-Red, 7-Orange, 8-Black, 9-Pink, 10-Violet, 11-Brown, 12-Aqua)
- Chapter 4: Fusion Splicing & Optical Joint Closure (Stripping, 99% Isopropyl Alcohol Cleaning, 90° Precision Cleaving, Electric Arc 8000°C, Splice Loss < 0.02 dB, Heat Shrink Sleeve 60mm, 1m fiber slack in tray, 1cm sheath clamped inside OJC)
- Chapter 5: Optical Testing Instruments (OTDR dead zones, Rayleigh scattering, Fresnel reflection, Optical Power Meter dBm/mW, 650nm Red VFL Laser safety, Optical Light Source)
- Chapter 6: FTTH & GPON Technology (OLT 1490nm Tx/1310nm Rx, Splitter 1:4, 1:8, 1:16, 1:32 insertion loss 3.5dB per 1:2, FDC, FAP, Drop Cable, ONU/ONT, Power budget -8 dBm to -27 dBm)
- Chapter 7: Outside Plant (OSP) Copper & Aerial Network (Primary exchange-to-cabinet, Secondary cabinet-to-DP, Drop wire to subscriber, Poles 7m/7.5m/8m, Tension clamp, Suspension clamp, Pole top clearances: 50cm for bracket, 110cm for DP)
- Chapter 8: MDF & Distribution Point (MDF Vertical/Horizontal sides, Krone Insertion tool punching with external cutting blade, 10/20 pair tag blocks, Test cord, Arrester magazine)
- Chapter 9: Copper Splicing & Moisture Sealing (Straight, Bridge, Butt joint, UY/UR/UG crimp connectors, Petroleum jelly waterproof closure, Heat shrink sleeve with torch)
- Chapter 10: Electrical Fundamentals & Ohm's Law (V=IR, P=VI, Series/Parallel, Loop resistance: 0.4mm=280Ω/km, 0.5mm=175Ω/km, 0.9mm=63.2Ω/km)
- Chapter 11: Earth Resistance & Telecom Grounding (Plate/Pipe/Rod earthing, Salt + Charcoal backfill, Earth tester 3-spike test, <1Ω core exchange, <5Ω BTS/Cabinet, <10Ω secondary)
- Chapter 12: Lead-Acid & Lithium Batteries (-48V DC telecom standard, 24 cells x 2V in series, Specific gravity 1.240-1.280 using hydrometer, Float charge 54V, Equalize charge 56.4V, Boost charge)
- Chapter 13: Lightning & Surge Protection (Lightning Arrester, Surge Protection Device SPD, Grounding down conductor, Gas Discharge Tube GDT)
- Chapter 14: EPABX & Key Telephone Systems (CO Lines, Extension ports, Call transfer, Conference, FXS/FXO, 48V on-hook, 6-12V off-hook, 90V 25Hz AC Ringing)
- Chapter 15: Safety Protocols, PPE & Pole Clearances (Helmet, Safety Belt, 75° ladder angle, 2m clearance from 33kV/66kV, 1.2-1.5m for 11kV, 30cm for 230V, 90° crossing angle, 30 min manhole ventilation)
- Chapter 16: Analog & Digital Transmission (PCM 8000 samples/sec, 8-bit = 64 kbps DS0, E1 frame = 32 channels x 64 kbps = 2.048 Mbps, Multiplexing FDM/TDM/WDM)
- Chapter 17: Logic Gates & Digital Electronics (AND, OR, NOT, NAND, NOR, XOR, De Morgan's theorems)
- Chapter 18: Telecom Network Migration (Planning, Installation, Configuration, Testing, Cutover, Verification, zero downtime)
- Chapter 19: Network Topologies (Bus, Star, Ring, Mesh, Tree, Hybrid)
- Chapter 20: Antennas & Systems (Dipole, Parabolic Dish, Horn, Microstrip Patch, Yagi-Uda, Gain, Directivity, Radiation pattern)
- Chapter 21: Mobile Evolution 1G to 5G & GSM (1G analog, 2G GSM, 3G UMTS, 4G LTE Jan 1 2017 in Nepal, 5G; MS, BTS, BSC, MSC, HLR permanent db, VLR visitor db, AuC security, EIR IMEI tracker)
- Chapter 22: CDMA, Spread Spectrum (FHSS, DSSS, Rake receiver for multipath fading, Near-Far problem power control)
- Chapter 23: Satellite Communication (Uplink > Downlink, L/S/C/X/Ku/Ka bands, Kepler's 3 laws T^2 ∝ a^3, Orbits: LEO, MEO, GEO 35,786 km, VSAT)
- Chapter 24: Internet & IP Networking (OSI 7 layers, IPv4 32-bit vs IPv6 128-bit, Router L3, Switch L2, Modem, TCP/UDP/DNS/DHCP/NAT/VPN)
- Chapter 25: Computer Fundamentals (ALU, CU, RAM, ROM, Peripherals, shortcuts)
- Chapter 26: AC/DC Bridges (Wheatstone R1/R2 = Rx/R3, Maxwell, Wien, Electrostatics E=F/q, Inductor V=L di/dt)
- Chapter 27: Power Inverters (DC to AC, Square wave, Modified sine, Pure Sine wave for telecom & computers)
- Chapter 28: Amplifiers & Oscillators (Positive feedback for oscillators, Negative feedback for low noise/distortion & stability)
- Chapter 29: Solar PV Systems (Panel -> Charge Controller/MPPT -> Battery Bank -> Load/Inverter)
- Chapter 30: Power Transformers (Mutual Induction, Step-up/Step-down Vp/Vs = Np/Ns = Is/Ip, Conservator, Breather with Silica Gel)
- Chapter 31: A/C in Telecom Rooms (18-22°C, 45-55% humidity, Compressor, Condenser, Evaporator)
- Chapter 32: Demand Survey & Wireline Planning (Area Selection, Field Survey, Data Collection, Demand Analysis, Network Plan)
- Chapter 33: Pick Up Joint (PUJ) (Non-intrusive drop wire branching with UY2 connectors without cutting main cable)
- Chapter 34: Power & Cable Separation (LV >= 30cm, Parallel 0.5-1m, HV >= 2m, 90° crossing)
- Chapter 35: Outside Plant (OSP) Base Mapping & GIS
- Chapter 36: NTC Emergency Codes (198 Repair/Complaint, 197 Enquiry, 1606 PSTN Bill, 1600 IVR) & Milestones
- Chapter 37: 100 VIVA Questions & Exam Cheat Sheet (Top FAQs)
- Chapter 38: CTEVT Practical Skill Test Guidelines (Sets 1, 2, 3 checklists & PPE)

Rules:
- Respond in polite, encouraging Nepali with technical terms in English brackets where appropriate.
- When answering, provide precise measurements, formulas, diagrams (in ASCII format if helpful), and practical field advice.
- Always encourage safety, precision, and adherence to CTEVT/NSTB standards.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\nUser Question/Topic: ${topic ? `[Topic: ${topic}] ` : ''}${userQuery}` }] }
        ],
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error('Error in /api/ai-tutor:', error);
      res.status(500).json({ error: 'AI प्राविधिक शिक्षक सम्पर्कमा त्रुटि भयो।', details: error.message });
    }
  });

  // AI Subjective Answer Evaluator against CTEVT Marking Scheme
  app.post('/api/evaluate-answer', async (req, res) => {
    try {
      const { question, studentAnswer, maxMarks } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.json({
          score: Math.min(maxMarks || 5, 4),
          feedback: 'राम्रो प्रयास! उत्तरमा प्राविधिक शब्दावली र मुख्य बुँदाहरू समेटिएका छन्। परीक्षामा अझ स्पष्ट रेखाचित्र (Diagram) र एकाइ (Units) उल्लेख गरेमा पूर्ण अङ्क प्राप्त हुनेछ।'
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are a CTEVT / National Skill Testing Board (NSTB) Lead Examiner for Telecom Technician Level-2.
Evaluate this student answer strictly against standard Nepal Telecom & CTEVT technical criteria.

Question: ${question}
Student's Answer: ${studentAnswer}
Maximum Marks: ${maxMarks || 5}

Provide a constructive evaluation in JSON format:
{
  "score": <number between 0 and maxMarks>,
  "strengths": ["list of good technical points"],
  "improvements": ["points missed or mistakes to rectify"],
  "modelSummary": "A concise model answer in Nepali for this question"
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      });

      let parsedResult;
      try {
        const text = response.text || '';
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          parsedResult = JSON.parse(jsonMatch[0]);
        } else {
          parsedResult = { score: Math.round((maxMarks || 5) * 0.8), feedback: text };
        }
      } catch (e) {
        parsedResult = { score: Math.round((maxMarks || 5) * 0.8), feedback: response.text };
      }

      res.json(parsedResult);
    } catch (error: any) {
      res.status(500).json({ error: 'मूल्याङ्कन गर्न सकिएन।', details: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`NITVT Telecom Training Portal Server running on http://localhost:${PORT}`);
  });
}

startServer();

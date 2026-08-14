import { ColorCodeItem, CopperPairItem } from '../types';

export const nepalTelecom12CoreOFC: ColorCodeItem[] = [
  { number: 1, nepaliName: 'नीलो', englishName: 'Blue', hexColor: '#2563eb', textColor: '#ffffff', internationalColor: 'Blue', internationalNepali: 'नीलो', internationalHex: '#2563eb' },
  { number: 2, nepaliName: 'सेतो', englishName: 'White', hexColor: '#f8fafc', textColor: '#0f172a', internationalColor: 'Orange', internationalNepali: 'सुन्तला', internationalHex: '#ea580c' },
  { number: 3, nepaliName: 'पहेंलो', englishName: 'Yellow', hexColor: '#eab308', textColor: '#0f172a', internationalColor: 'Green', internationalNepali: 'हरियो', internationalHex: '#16a34a' },
  { number: 4, nepaliName: 'हरियो', englishName: 'Green', hexColor: '#16a34a', textColor: '#ffffff', internationalColor: 'Brown', internationalNepali: 'खैरो', internationalHex: '#78350f' },
  { number: 5, nepaliName: 'खरानी', englishName: 'Slate / Grey', hexColor: '#64748b', textColor: '#ffffff', internationalColor: 'Slate (Gray)', internationalNepali: 'खरानी', internationalHex: '#64748b' },
  { number: 6, nepaliName: 'रातो', englishName: 'Red', hexColor: '#dc2626', textColor: '#ffffff', internationalColor: 'White', internationalNepali: 'सेतो', internationalHex: '#f8fafc' },
  { number: 7, nepaliName: 'सुन्तला', englishName: 'Orange', hexColor: '#ea580c', textColor: '#ffffff', internationalColor: 'Red', internationalNepali: 'रातो', internationalHex: '#dc2626' },
  { number: 8, nepaliName: 'कालो', englishName: 'Black', hexColor: '#0f172a', textColor: '#ffffff', internationalColor: 'Black', internationalNepali: 'कालो', internationalHex: '#0f172a' },
  { number: 9, nepaliName: 'गुलाबी', englishName: 'Pink', hexColor: '#ec4899', textColor: '#ffffff', internationalColor: 'Yellow', internationalNepali: 'पहेंलो', internationalHex: '#eab308' },
  { number: 10, nepaliName: 'बैजनी', englishName: 'Violet / Purple', hexColor: '#7c3aed', textColor: '#ffffff', internationalColor: 'Violet (Purple)', internationalNepali: 'बैजनी', internationalHex: '#7c3aed' },
  { number: 11, nepaliName: 'खैरो', englishName: 'Brown', hexColor: '#78350f', textColor: '#ffffff', internationalColor: 'Rose (Pink)', internationalNepali: 'गुलाबी', internationalHex: '#ec4899' },
  { number: 12, nepaliName: 'आकाशी नीलो', englishName: 'Aqua / Turquoise', hexColor: '#06b6d4', textColor: '#0f172a', internationalColor: 'Aqua (Cyan)', internationalNepali: 'आकाशी नीलो', internationalHex: '#06b6d4' }
];

export const looseTubeColorCodeNepal: { tubeNo: number; colorNepali: string; colorEnglish: string; hex: string }[] = [
  { tubeNo: 1, colorNepali: 'रातो (Red)', colorEnglish: 'Red', hex: '#dc2626' },
  { tubeNo: 2, colorNepali: 'हरियो (Green)', colorEnglish: 'Green', hex: '#16a34a' },
  { tubeNo: 3, colorNepali: 'नीलो (Blue)', colorEnglish: 'Blue', hex: '#2563eb' },
  { tubeNo: 4, colorNepali: 'सेतो (White)', colorEnglish: 'White', hex: '#f8fafc' },
  { tubeNo: 5, colorNepali: 'बैजनी (Violet)', colorEnglish: 'Violet', hex: '#7c3aed' },
  { tubeNo: 6, colorNepali: 'सुन्तला (Orange)', colorEnglish: 'Orange', hex: '#ea580c' },
  { tubeNo: 7, colorNepali: 'खरानी (Grey)', colorEnglish: 'Grey', hex: '#64748b' },
  { tubeNo: 8, colorNepali: 'पहेंलो (Yellow)', colorEnglish: 'Yellow', hex: '#eab308' },
  { tubeNo: 9, colorNepali: 'खैरो (Brown)', colorEnglish: 'Brown', hex: '#78350f' },
  { tubeNo: 10, colorNepali: 'गुलाबी (Pink)', colorEnglish: 'Pink', hex: '#ec4899' },
  { tubeNo: 11, colorNepali: 'कालो (Black)', colorEnglish: 'Black', hex: '#0f172a' },
  { tubeNo: 12, colorNepali: 'आकाशी नीलो (Aqua)', colorEnglish: 'Aqua', hex: '#06b6d4' }
];

export const copper25PairTable: CopperPairItem[] = [
  { pairNo: 1, tipWire: 'White (सेतो)', ringWire: 'Blue (नीलो)', primaryColorHex: '#f8fafc', secondaryColorHex: '#2563eb', binderGroup: 'Group 1' },
  { pairNo: 2, tipWire: 'White (सेतो)', ringWire: 'Orange (सुन्तला)', primaryColorHex: '#f8fafc', secondaryColorHex: '#ea580c', binderGroup: 'Group 1' },
  { pairNo: 3, tipWire: 'White (सेतो)', ringWire: 'Green (हरियो)', primaryColorHex: '#f8fafc', secondaryColorHex: '#16a34a', binderGroup: 'Group 1' },
  { pairNo: 4, tipWire: 'White (सेतो)', ringWire: 'Brown (खैरो)', primaryColorHex: '#f8fafc', secondaryColorHex: '#78350f', binderGroup: 'Group 1' },
  { pairNo: 5, tipWire: 'White (सेतो)', ringWire: 'Grey / Slate (खरानी)', primaryColorHex: '#f8fafc', secondaryColorHex: '#64748b', binderGroup: 'Group 1' },
  { pairNo: 6, tipWire: 'Red (रातो)', ringWire: 'Blue (नीलो)', primaryColorHex: '#dc2626', secondaryColorHex: '#2563eb', binderGroup: 'Group 1' },
  { pairNo: 7, tipWire: 'Red (रातो)', ringWire: 'Orange (सुन्तला)', primaryColorHex: '#dc2626', secondaryColorHex: '#ea580c', binderGroup: 'Group 1' },
  { pairNo: 8, tipWire: 'Red (रातो)', ringWire: 'Green (हरियो)', primaryColorHex: '#dc2626', secondaryColorHex: '#16a34a', binderGroup: 'Group 1' },
  { pairNo: 9, tipWire: 'Red (रातो)', ringWire: 'Brown (खैरो)', primaryColorHex: '#dc2626', secondaryColorHex: '#78350f', binderGroup: 'Group 1' },
  { pairNo: 10, tipWire: 'Red (रातो)', ringWire: 'Grey / Slate (खरानी)', primaryColorHex: '#dc2626', secondaryColorHex: '#64748b', binderGroup: 'Group 1' },
  { pairNo: 11, tipWire: 'Black (कालो)', ringWire: 'Blue (नीलो)', primaryColorHex: '#0f172a', secondaryColorHex: '#2563eb', binderGroup: 'Group 2' },
  { pairNo: 12, tipWire: 'Black (कालो)', ringWire: 'Orange (सुन्तला)', primaryColorHex: '#0f172a', secondaryColorHex: '#ea580c', binderGroup: 'Group 2' },
  { pairNo: 13, tipWire: 'Black (कालो)', ringWire: 'Green (हरियो)', primaryColorHex: '#0f172a', secondaryColorHex: '#16a34a', binderGroup: 'Group 2' },
  { pairNo: 14, tipWire: 'Black (कालो)', ringWire: 'Brown (खैरो)', primaryColorHex: '#0f172a', secondaryColorHex: '#78350f', binderGroup: 'Group 2' },
  { pairNo: 15, tipWire: 'Black (कालो)', ringWire: 'Grey / Slate (खरानी)', primaryColorHex: '#0f172a', secondaryColorHex: '#64748b', binderGroup: 'Group 2' },
  { pairNo: 16, tipWire: 'Yellow (पहेंलो)', ringWire: 'Blue (नीलो)', primaryColorHex: '#eab308', secondaryColorHex: '#2563eb', binderGroup: 'Group 2' },
  { pairNo: 17, tipWire: 'Yellow (पहेंलो)', ringWire: 'Orange (सुन्तला)', primaryColorHex: '#eab308', secondaryColorHex: '#ea580c', binderGroup: 'Group 2' },
  { pairNo: 18, tipWire: 'Yellow (पहेंलो)', ringWire: 'Green (हरियो)', primaryColorHex: '#eab308', secondaryColorHex: '#16a34a', binderGroup: 'Group 2' },
  { pairNo: 19, tipWire: 'Yellow (पहेंलो)', ringWire: 'Brown (खैरो)', primaryColorHex: '#eab308', secondaryColorHex: '#78350f', binderGroup: 'Group 2' },
  { pairNo: 20, tipWire: 'Yellow (पहेंलो)', ringWire: 'Grey / Slate (खरानी)', primaryColorHex: '#eab308', secondaryColorHex: '#64748b', binderGroup: 'Group 2' },
  { pairNo: 21, tipWire: 'Violet (बैजनी)', ringWire: 'Blue (नीलो)', primaryColorHex: '#7c3aed', secondaryColorHex: '#2563eb', binderGroup: 'Group 3' },
  { pairNo: 22, tipWire: 'Violet (बैजनी)', ringWire: 'Orange (सुन्तला)', primaryColorHex: '#7c3aed', secondaryColorHex: '#ea580c', binderGroup: 'Group 3' },
  { pairNo: 23, tipWire: 'Violet (बैजनी)', ringWire: 'Green (हरियो)', primaryColorHex: '#7c3aed', secondaryColorHex: '#16a34a', binderGroup: 'Group 3' },
  { pairNo: 24, tipWire: 'Violet (बैजनी)', ringWire: 'Brown (खैरो)', primaryColorHex: '#7c3aed', secondaryColorHex: '#78350f', binderGroup: 'Group 3' },
  { pairNo: 25, tipWire: 'Violet (बैजनी)', ringWire: 'Grey / Slate (खरानी)', primaryColorHex: '#7c3aed', secondaryColorHex: '#64748b', binderGroup: 'Group 3' },
];

export const binderRibbonColorCode: { pairRange: string; colorNepali: string; hex: string }[] = [
  { pairRange: '१ – १० पेयर', colorNepali: 'नीलो (Blue)', hex: '#2563eb' },
  { pairRange: '११ – २० पेयर', colorNepali: 'सुन्तला (Orange)', hex: '#ea580c' },
  { pairRange: '२१ – ३० पेयर', colorNepali: 'हरियो (Green)', hex: '#16a34a' },
  { pairRange: '३१ – ४० पेयर', colorNepali: 'खैरो (Brown)', hex: '#78350f' },
  { pairRange: '४१ – ५० पेयर', colorNepali: 'खरानी (Grey)', hex: '#64748b' },
  { pairRange: '५१ – ६० पेयर', colorNepali: 'नीलो + रातो (Blue + Red)', hex: '#2563eb' },
  { pairRange: '६१ – ७० पेयर', colorNepali: 'सुन्तला + रातो (Orange + Red)', hex: '#ea580c' },
  { pairRange: '७१ – ८० पेयर', colorNepali: 'हरियो + रातो (Green + Red)', hex: '#16a34a' },
  { pairRange: '८१ – ९० पेयर', colorNepali: 'खैरो + रातो (Brown + Red)', hex: '#78350f' },
  { pairRange: '९१ – १०० पेयर', colorNepali: 'खरानी + रातो (Grey + Red)', hex: '#64748b' },
];

export const superUnitGroups150Pair: { groupNo: number; groupBinderColor: string; pairRange: string }[] = [
  { groupNo: 1, groupBinderColor: 'नीलो (Blue)', pairRange: '१ देखि ५० पेयर (1 - 50)' },
  { groupNo: 2, groupBinderColor: 'सुन्तला (Orange)', pairRange: '५१ देखि १०० पेयर (51 - 100)' },
  { groupNo: 3, groupBinderColor: 'हरियो (Green)', pairRange: '१०१ देखि १५० पेयर (101 - 150)' }
];

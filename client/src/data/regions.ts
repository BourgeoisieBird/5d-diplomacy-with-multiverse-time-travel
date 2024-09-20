import Nation from '../types/enums/nation';
import RegionType from '../types/enums/regionType';
import Region from '../types/region';

const regions: { [id: string]: Region } = {
  ADR: { x: 445, y: 225, type: RegionType.Sea },
  AEG: { x: 615, y: 100, type: RegionType.Sea },
  Alb: { x: 520, y: 180, type: RegionType.Coast },
  Ank: { x: 770, y: 190, type: RegionType.Coast, isSupplyCentre: true, homeNation: Nation.Juggernaut },
  Apu: { x: 455, y: 180, type: RegionType.Coast },
  Arm: { x: 890, y: 195, type: RegionType.Coast },
  BAL: { x: 485, y: 510, type: RegionType.Sea },
  BAR: { x: 680, y: 875, type: RegionType.Sea },
  Bel: { x: 300, y: 415, type: RegionType.Coast, isSupplyCentre: true },
  Ber: { x: 430, y: 465, type: RegionType.Coast, isSupplyCentre: true, homeNation: Nation.Frankland },
  BLA: { x: 755, y: 255, type: RegionType.Sea },
  Boh: { x: 445, y: 380, type: RegionType.Land },
  BOT: { x: 530, y: 585, type: RegionType.Sea },
  Bre: { x: 205, y: 375, type: RegionType.Coast, isSupplyCentre: true, homeNation: Nation.Frankland },
  Bud: { x: 540, y: 310, type: RegionType.Land, isSupplyCentre: true },
  Bul: { x: 610, y: 215, type: RegionType.Coast, isSupplyCentre: true },
  Bul_E: { x: 635, y: 225, type: RegionType.Coast },
  Bul_S: { x: 615, y: 185, type: RegionType.Coast },
  Bur: { x: 295, y: 345, type: RegionType.Land },
  Cly: { x: 210, y: 595, type: RegionType.Coast },
  Con: { x: 675, y: 170, type: RegionType.Coast, isSupplyCentre: true, homeNation: Nation.Juggernaut },
  Den: { x: 390, y: 530, type: RegionType.Coast, isSupplyCentre: true },
  EAS: { x: 730, y: 40, type: RegionType.Sea },
  Edi: { x: 245, y: 585, type: RegionType.Coast, isSupplyCentre: true },
  ENG: { x: 220, y: 430, type: RegionType.Sea },
  Fin: { x: 585, y: 660, type: RegionType.Coast },
  Gal: { x: 575, y: 370, type: RegionType.Land },
  Gas: { x: 210, y: 300, type: RegionType.Coast },
  Gre: { x: 550, y: 140, type: RegionType.Coast, isSupplyCentre: true },
  HEL: { x: 350, y: 505, type: RegionType.Sea },
  Hol: { x: 320, y: 445, type: RegionType.Coast, isSupplyCentre: true },
  ION: { x: 490, y: 60, type: RegionType.Sea },
  IRI: { x: 140, y: 475, type: RegionType.Sea },
  Kie: { x: 375, y: 450, type: RegionType.Coast, isSupplyCentre: true, homeNation: Nation.Frankland },
  Lon: { x: 250, y: 470, type: RegionType.Coast, isSupplyCentre: true },
  Lvn: { x: 585, y: 520, type: RegionType.Coast },
  Lvp: { x: 225, y: 535, type: RegionType.Coast, isSupplyCentre: true },
  LYO: { x: 275, y: 215, type: RegionType.Sea },
  MAO: { x: 75, y: 380, type: RegionType.Sea },
  Mar: { x: 285, y: 280, type: RegionType.Coast, isSupplyCentre: true, homeNation: Nation.Frankland },
  Mos: { x: 800, y: 540, type: RegionType.Land, isSupplyCentre: true, homeNation: Nation.Juggernaut },
  Mun: { x: 380, y: 375, type: RegionType.Land, isSupplyCentre: true, homeNation: Nation.Frankland },
  Naf: { x: 155, y: 55, type: RegionType.Coast },
  NAO: { x: 110, y: 720, type: RegionType.Sea },
  Nap: { x: 460, y: 140, type: RegionType.Coast, isSupplyCentre: true },
  NTH: { x: 305, y: 560, type: RegionType.Sea },
  NWG: { x: 370, y: 805, type: RegionType.Sea },
  Nwy: { x: 395, y: 636, type: RegionType.Coast, isSupplyCentre: true },
  Par: { x: 250, y: 365, type: RegionType.Land, isSupplyCentre: true, homeNation: Nation.Frankland },
  Pic: { x: 260, y: 405, type: RegionType.Coast },
  Pie: { x: 340, y: 285, type: RegionType.Coast },
  Por: { x: 40, y: 235, type: RegionType.Coast, isSupplyCentre: true },
  Pru: { x: 495, y: 465, type: RegionType.Coast },
  Rom: { x: 405, y: 205, type: RegionType.Coast, isSupplyCentre: true },
  Ruh: { x: 340, y: 405, type: RegionType.Land },
  Rum: { x: 645, y: 270, type: RegionType.Coast, isSupplyCentre: true },
  Ser: { x: 540, y: 225, type: RegionType.Land, isSupplyCentre: true },
  Sev: { x: 765, y: 380, type: RegionType.Coast, isSupplyCentre: true, homeNation: Nation.Juggernaut },
  Sil: { x: 470, y: 415, type: RegionType.Land },
  SKA: { x: 405, y: 570, type: RegionType.Sea },
  Smy: { x: 750, y: 120, type: RegionType.Coast, isSupplyCentre: true, homeNation: Nation.Juggernaut },
  Spa: { x: 115, y: 215, type: RegionType.Coast, isSupplyCentre: true },
  Spa_N: { x: 115, y: 280, type: RegionType.Coast },
  Spa_S: { x: 125, y: 170, type: RegionType.Coast },
  Stp: { x: 690, y: 660, type: RegionType.Coast, isSupplyCentre: true, homeNation: Nation.Juggernaut },
  Stp_N: { x: 780, y: 760, type: RegionType.Coast, homeNation: Nation.Juggernaut },
  Stp_S: { x: 625, y: 595, type: RegionType.Coast, homeNation: Nation.Juggernaut },
  Swe: { x: 470, y: 640, type: RegionType.Coast, isSupplyCentre: true },
  Syr: { x: 870, y: 85, type: RegionType.Coast },
  Tri: { x: 470, y: 265, type: RegionType.Coast, isSupplyCentre: true },
  Tun: { x: 330, y: 45, type: RegionType.Coast, isSupplyCentre: true },
  Tus: { x: 380, y: 240, type: RegionType.Coast },
  Tyr: { x: 410, y: 315, type: RegionType.Land },
  TYS: { x: 380, y: 155, type: RegionType.Sea },
  Ukr: { x: 655, y: 395, type: RegionType.Land },
  Ven: { x: 380, y: 275, type: RegionType.Coast, isSupplyCentre: true },
  Vie: { x: 480, y: 345, type: RegionType.Land, isSupplyCentre: true },
  Wal: { x: 210, y: 475, type: RegionType.Coast },
  War: { x: 555, y: 425, type: RegionType.Land, isSupplyCentre: true, homeNation: Nation.Juggernaut },
  WES: { x: 215, y: 140, type: RegionType.Sea },
  Yor: { x: 250, y: 510, type: RegionType.Coast },
};

export default regions;

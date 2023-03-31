/*
 * Default params for tesseract.js
 */
import { PSM } from '../../constants/PSM';

export const defaultParams = {
  tesseditPagesegMode: PSM.SINGLE_BLOCK,
  tesseditCharWhitelist: '',
  tessjsCreateHocr: '1',
  tessjsCreateTsv: '1',
  tessjsCreateBox: '0',
  tessjsCreateUnlv: '0',
  tessjsCreateOsd: '0',
};

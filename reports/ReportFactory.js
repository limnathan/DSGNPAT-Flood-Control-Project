import { Report1Generator } from './Report1Generator.js';
import { Report2Generator } from './Report2Generator.js';
import { Report3Generator } from './Report3Generator.js';

class ReportFactory {
    static createReport(type, data) {
        switch (type) {
            case 'REPORT_1':
                return new Report1Generator(data);
            case 'REPORT_2':
                return new Report2Generator(data);
            case 'REPORT_3':
                return new Report3Generator(data);
            default:
                throw new Error(`Report type '${type}' is not recognized.`);
        }
    }
}
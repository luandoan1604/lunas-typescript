"use strict";
class staff {
    static create(event) {
        return {
            ma: event.ma,
            hoTen: event.hoTen,
            clb: event.clb,
            luong: event.luong,
            thuong: event.thuong,
            phuCap: event.phuCap,
            ghiChu: event.ghiChu,
        };
    }
}

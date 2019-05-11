(function (d) {

    function GExcel() {
        this.filePath = '';
        this.Muilt = [];
    }

    GExcel.prototype = {

        constructor: GExcel,
        
        init: function () { },

        setCellData: function () { }
    };

    d.GExcel = GExcel;
})(window.GL = window.GL || {});
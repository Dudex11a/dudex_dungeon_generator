console.log("PMD Dungeon Generator");
var GridItem = /** @class */ (function () {
    function GridItem(coords) {
        var _this = this;
        this.create_element = function () {
            var ele = document.createElement("div");
            // ele.innerText = String(this);
            ele.style.gridColumn = String(_this.x);
            ele.style.gridRow = String(_this.y);
            return ele;
        };
        this.toString = function () {
            return "".concat(String(_this.x), "-").concat(String(_this.y));
        };
        this.x = coords[0] + 1;
        this.y = coords[1] + 1;
    }
    return GridItem;
}());
var Grid = /** @class */ (function () {
    function Grid(size_x, size_y) {
        if (size_x === void 0) { size_x = 100; }
        if (size_y === void 0) { size_y = 100; }
        var _this = this;
        this.grid = [];
        this.to_element = function () {
            var ele = document.createElement("div");
            ele.classList.add("html_dungeon_display");
            for (var y in _this.grid) {
                var column = _this.grid[y];
                for (var x in column) {
                    var grid_item = column[x];
                    ele.append(grid_item.create_element());
                }
            }
            return ele;
        };
        for (var y = 0; y < size_y; y++) {
            var column = [];
            for (var x = 0; x < size_x; x++) {
                var grid_item = new GridItem([x, y]);
                column.push(grid_item);
            }
            this.grid.push(column);
        }
    }
    return Grid;
}());
// ===== Init =====
function init() {
    var grid_1 = new Grid();
    document.body.append(grid_1.to_element());
}
init();

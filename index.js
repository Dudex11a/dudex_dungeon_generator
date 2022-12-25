console.log("PMD Dungeon Generator");


const dungeon_display = document.querySelector("#dungeon_display");
const pseudo_dungeon_display = document.querySelector("#pseudo_dungeon_display");


class GridItem {
    constructor (coords) {
        this.x = coords[0] + 1;
        this.y = coords[1] + 1;
    }

    create_element = () => {
        const ele = document.createElement("div");
        
        // ele.innerText = String(this);
        
        ele.style.gridColumn = this.x;
        ele.style.gridRow = this.y;

        return ele;
    }

    toString = () => {
        return `${String(this.x)}-${String(this.y)}`
    }
}


function create_grid(size_x, size_y) {
    let grid = [];

    for (let y = 0; y < size_y; y++) {
        let column = [];
        for (let x = 0; x < size_x; x++) {
            let grid_item = new GridItem([x, y]);
            column.push(grid_item);
        }
        grid.push(column);
    }

    return grid;
}


function grid_to_document(grid = create_grid(100, 100)) {
    for (let y in grid) {
        const column = grid[y];
        for (let x in column) {
            const grid_item = column[x];
            pseudo_dungeon_display.append(grid_item.create_element());
        }
    }
}


// function create_ele_grid(size_x, size_y) {
//     for (let y = 0; y < size_y; y++) {
//         for (let x = 0; x < size_x; x++) {
//             console.log(x, y);
//             const grid_item = d();
//             grid_item.innerText = "a";
//             pseudo_dungeon_display.append(grid_item);
//         }
//     }
// }


// ===== Init =====

function init() {
    grid_to_document();
}


init();
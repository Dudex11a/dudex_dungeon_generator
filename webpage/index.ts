console.log("PMD Dungeon Generator");

class GridItem {

    public x: number;
    public y: number;

    constructor (coords: [number, number]) {
        this.x = coords[0] + 1;
        this.y = coords[1] + 1;
    }

    create_element = () => {
        const ele = document.createElement("div");
        
        // ele.innerText = String(this);
        
        ele.style.gridColumn = String(this.x);
        ele.style.gridRow = String(this.y);

        return ele;
    }

    toString = () => {
        return `${String(this.x)}-${String(this.y)}`
    }
}


class Grid {

    public grid: GridItem[][] = [];

    constructor(size_x: number = 100, size_y: number = 100) {
        for (let y = 0; y < size_y; y++) {
            const column: GridItem[] = [];
            for (let x = 0; x < size_x; x++) {
                const grid_item = new GridItem([x, y]);
                column.push(grid_item);
            }
            this.grid.push(column);
        }
    }

    to_element = () => {
        const ele = document.createElement("div");
        ele.classList.add("html_dungeon_display")

        for (const y in this.grid) {
            const column = this.grid[y];
            for (const x in column) {
                const grid_item = column[x];
                ele.append(grid_item.create_element());
            }
        }
        
        return ele
    }
    
}


// ===== Init =====

function init() {
    const grid_1 = new Grid();
    document.body.append(grid_1.to_element());
}


init();
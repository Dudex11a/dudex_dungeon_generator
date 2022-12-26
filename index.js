console.log("PMD Dungeon Generator");


const dungeon_display = document.querySelector("#dungeon_display");
const pseudo_dungeon_display = document.querySelector("#pseudo_dungeon_display");


class MapTile {

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


class DungeonMap {

    constructor (size_x, size_y) {
        this.map_tiles = [];
    
        for (let y = 0; y < size_y; y++) {
            let column = [];
            for (let x = 0; x < size_x; x++) {
                let map_tile = new MapTile([x, y]);
                column.push(map_tile);
            }
            this.map_tiles.push(column);
        }
    }
    
    
    to_element = () => {
        let element = document.createElement("div");
        element.classList.add("html_dungeon_display");

        for (let y in this.map_tiles) {
            const column = this.map_tiles[y];
            for (let x in column) {
                const map_tile = column[x];
                element.append(map_tile.create_element());
            }
        }
        return element;
    }

}


// ===== Init =====

function init() {
    // Create dungeon_map
    let dungeon_map = new DungeonMap(30, 30);
    // Add dungeon_map
    document.body.append(dungeon_map.to_element());
}


init();
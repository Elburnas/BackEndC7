const fs = requiere('fs')
let productos = []
let contenido = fs.readFileSync('./productos.json', 'utf-8')
class ProductManager {
    constructor(filename){
        this.filename = filename
    }

    createProduct = async(title, description, price, thumbnail, code, stock) => {
        if (productos.legnth === 0) id=1
        else productos[length-1].id+1
        productos.push({id, title, description, price, thumbnail, code, stock})
        fs.writeFileSync(this.filename, JSON.stringif(productos))
    }

    getProducts = async() =>{
        let obj = JSON.parse(contenido)
        console.log(obj)
        return obj
    }
    
    getProductById = async(id) => {
        let obj = JSON.parse(contenido)
        if(obj = obj.find(obj => obj.id === id))
        {
            console.log(obj)
            return
        }
    }
}

async function desafio(){
    const manager = new ProductManager('product.json')
    await manager.createProduct("Pepsi de 2 lt", "Same description", 20, "https://pepsi.jpg",10101, 20)
}

desafio()
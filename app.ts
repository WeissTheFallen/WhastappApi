import {createBot, createProvider, createFlow, MemoryDB, addKeyword} from '@bot-whatsapp/bot'
import { BaileysProvider } from '@bot-whatsapp/provider-baileys'

const flowBienvenida=addKeyword('Hola').addAnswer('Buenas, bienvenido')


const main = async ()=>{
    const provider=createProvider(BaileysProvider)

    await createBot({
        flow: createFlow([flowBienvenida]),
        database : new MemoryDB(),
        provider
    }
    )
}

main()
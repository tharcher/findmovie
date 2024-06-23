import { Tag } from "../../Tag/Tag";
import { Button } from "../Button";

export function Card() {
    return (
        <div className="p-2 gap-3 grid grid-cols-3 shadow-lg rounded-lg border border-gray-100 max-w-lg">
            <img
                src="https://midias.imagemfilmes.com.br/capas/639de834-ea9d-48ba-b327-5a18711cf720_m.jpg"
                alt=""
                className="col-span-1 w-full h-full rounded-lg"
            />
            <div className="col-span-2">
                <p className="font-bold text-2xl text-evergreen">Kill Bill</p>
                <p className="font-light text-sm text-gray-500 mb-2">Direção: Quentin Tarantino</p>
                <Tag 
                    title="vingança" 
                    className="mb-3"
                />
                <p><strong>Sinopse:</strong> Traída e quase morta, a assassina de elite "A Noiva" acorda de um coma após cinco anos. Ela quer vingança contra seu inimigo "Bill" e seus comparsas assassinos.</p>
                <Button
                    title="Ver mais"
                    variant="light"
                    className="w-1/2"                    
                />
            </div>
        </div>
    )
}
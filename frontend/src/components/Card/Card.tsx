import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";

type Props = {
    id: string;
}

export function Card({ id }: Props) {
    const navigate = useNavigate()
    const handleSelectedMovie = useCallback(() => {
        navigate(`/${id}`);
    }, [id, navigate])
    return (
        <div className="p-2 gap-3 grid grid-cols-3 shadow-lg rounded-lg border border-gray-100 max-w-lg">
            <div className="col-span-1">
                <img
                    src="https://br.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/87/81/80/19969754.jpg"
                    alt=""
                    className="object-center w-full h-full rounded-lg"
                />
            </div>
            <div className="col-span-2 flex flex-col justify-between">
                <div>
                    <p className="font-bold text-2xl text-evergreen">Kill Bill</p>
                    <p className="font-light text-sm text-gray-500 mb-2">Direção: Quentin Tarantino</p>
                    <Tag title="vingança" className="mb-3" />
                    <p className="text-justify">
                        <strong>Sinopse: </strong>
                        Traída e quase morta, a assassina de elite acorda de um coma após cinco anos. Ela quer vingança contra seu inimigo e seus comparsas assassinos.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Button
                        title="Ver mais"
                        variant="light"
                        className="w-full md:py-1 py-0.5 bg-transparent border rounded-md transition duration-300 ease-in-out hover:bg-blue-100 hover:border-blue-200 hover:text-blue-400 md:text-sm"
                        onClick={handleSelectedMovie}
                    />
                </div>
            </div>
        </div>
    )
}
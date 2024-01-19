"use client"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

export default function ZoomImages({images}) {
    return (
        <TransformWrapper>
            <TransformComponent>
                {images.map((val) => (
                    <img src={val.image} alt={val.title} className="w-full m-1 h-max" />
                ))}
            </TransformComponent>
        </TransformWrapper>
    )
}

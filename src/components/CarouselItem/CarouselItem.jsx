export default function CarouselItem({ item }) {

    return (
        <div>
            <img src={item.image} className="imagesCarousel" alt="" />
        </div>
    )
}

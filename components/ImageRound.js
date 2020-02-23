const ImageRound = (props) => {
    return (
        <div>
            <div className="image">
                <img src={props.src} alt={props.alt} />
            </div>
            <style jsx>{`
                .image {
                    display: flex;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 8px solid #b7b7b7;
                }
            `}</style>
        </div>
    )
}

export default ImageRound
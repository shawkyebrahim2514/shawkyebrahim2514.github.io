export default function ActualImage({ personImage }: { personImage: string }) {
    return (
        <div className="w-full h-full rounded-full overflow-hidden absolute shadow-lg border-4 border-base-100 z-20">
            <img
                src={personImage}
                alt="Shawky Ebrahim"
                className="w-full h-full object-cover"
            />
        </div>
    );
}

import Text from '../../Text'

function ActualText({ text }: { readonly text: string }) {
    return (
        <div className="flex justify-center items-center rounded-lg bg-secondary p-2 px-6">
            <Text variant={"h2"}>{text}</Text>
        </div>
    );
}

export default ActualText;
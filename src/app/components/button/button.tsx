interface ButtonProps {
    link: string,
    text: string
}

export default function MyButton({link, text}: ButtonProps) {
    return (
        <div className="hover:bg-gray-700 hover:text-white hover:border-white text-base my-10 py-2 px-2 text-center w-fit rounded-3xl border-black border-2">
            <a href={`${link}`}>{text}</a>
        </div>
    )
}
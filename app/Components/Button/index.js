export default function Button(props) {
    return (
        <button className="rounded-lg w-full bg-blue-800 hover:bg-blue-700 text-white px-3 py-3 md:px-7 md:py-3 mt-5 text-xl font-regular">
            {props.icon && (
                <i className={`${props.icon} me-2`}></i>
            )}
            {props.children}
        </button>
    );
}
export function Button({ label, onClick, value }: { label: string, onClick: any, value: string }) {

    const handleClick = (event: any) => {
        onClick(value);
    }

    return (
        <button onClick={handleClick} className="btn btn-primary d-block w-100">{label}</button>
    );
}
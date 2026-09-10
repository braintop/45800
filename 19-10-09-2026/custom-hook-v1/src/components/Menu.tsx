import useToggle from '../hooks/useToggle';
export default function Menu() {

    const { value:isOpen, toggle } = useToggle(false);
    return (
        <div>
            <h1>Menu</h1>
            <button onClick={toggle}>{isOpen ? 'Close' : 'Open'}</button>
            {isOpen && <div style={{ backgroundColor: 'blue', padding: '20px', color: 'white' , border: '1px solid white'}}>
                
                <h2>Menu</h2>
                <p>This is the menu content</p>
                <button onClick={toggle}>Close</button>
                </div>}
        </div>
    );
}
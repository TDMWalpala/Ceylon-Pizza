export default function Menu() {
    return (
        <div className="items-center p-4 text-center transition-all bg-gray-100 rounded-lg hover:bg-white hover:shadow-gray/50 hover:shadow">
            <div className="text-center">
            <img src="/pizza.png" alt="pizza" className="block mx-auto max-h-auto max-h-24"/>
            </div>
            <h4 className="my-2 text-xl font-semibold">Pepperoni Pizza</h4>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eos.</p>
            <button className="px-6 py-2 mt-4 text-sm text-white uppercase rounded-full bg-primary">Add to card $12</button>
        </div>
    );
}
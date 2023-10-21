// type Guess = {
//     name: string,
//     year: string,
//     collection: string,
//     rarity: string 
//     etc
// }

export function GuessList(){
    return (
        <div className="flex flex-col items-center justify-center">
            <div className=" grid w-1/3 h-96 ">
                <div className="w-auto h-14 bg-slate-500"></div>
                <div className="w-auto h-14 bg-slate-500"></div>
                <div className="w-auto h-14 bg-slate-500"></div>
                <div className="w-auto h-14 bg-slate-500"></div>
                <div className="w-auto h-14 bg-slate-500"></div>
                <div className="w-auto h-14 bg-slate-500"></div>
            </div>
            <div className="flex m-1">
                <input type="text" placeholder="Guess a skin!" autoFocus className="w-2/3 p-4 rounded-lg bg-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-slate-500 focus:ring-1"  />
                <button type="submit" className="ml-3 p-4 flex items-center bg-green-700 rounded-lg hover:bg-green-600 transition-colors">Guess!</button>
            </div>

        </div>
    )
}
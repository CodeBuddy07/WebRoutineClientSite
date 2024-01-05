

const Home = () => {
    return (
        <>
            <div>
                
                <table className="text-center border m-10">
                    <tr className="border ">
                        <th className="border p-3">Date</th>
                        <th className="border p-3">Subject</th>
                        <th className="border p-3">Subject code</th>
                        <th className="border p-3">Time</th>
                    </tr>
                    <tr className="border">
                        <td className="border p-3">21 January,2024</td>
                        <td className="border p-3">Web design And Development</td>
                        <td className="border p-3">25486</td>
                        <td className="border p-3">10:30 AM</td>
                    </tr>

                </table>
            </div>

            <div className="m-10">
                <input defaultValue="2001-01-03" className="border p-1 bg-slate-100 border-black rounded" type="date" name="" id="" />
                <select name="SubjectSelection" className="border p-1 ms-3 border-black rounded" id="">
                    <option value="Web Design And Development">Web Design And Development</option>
                    <option value="Web Design And Development">Java Programming</option>
                    <option value="Web Design And Development">Environmental Studies</option>
                </select>
                <input className="border ms-3 p-1 bg-slate-100 border-black rounded" defaultValue="10:30" type="time" name="" id="" />
                <input className="px-7 ms-3 bg-green-400 text-white py-2 rounded font-semibold" type="submit" value="ADD" />
            </div>
        </>
    );
};

export default Home;
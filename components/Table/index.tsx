interface TableProps {
    titles: string[];
    data: string[];
}

export const Table = ({titles, data}: TableProps) => {
    return (
        <table className="table-auto">
            <thead>
                    <tr>
                        {                    
                            titles.map((title, index) => (<th  key={index} className="px-4 py-2">{title}</th>))
                        }   
                    </tr>
            </thead>
            <tbody>
                {
                    data.map((row, index) => ({
                        return(
                            <tr key={index}>
                        )
                    }))
                }
            </tbody>
        </table>
    )
}
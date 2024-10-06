export const SearchPanel:React.FC<{onSort(sortBy: string): void}> = props => {
    return (
        <div className="flex">
            <div className="searchpanel">
                <span className="font-bold">Sort by </span> 
                <select className="border"   onChange={e => props.onSort(e.target.value)} data-testid="drp-hotel-sort">
                <option value="price-high-low">Price high-low</option>
                <option value="price-low-high">price low-high</option>
                </select>
            </div>
        </div>
    );
}
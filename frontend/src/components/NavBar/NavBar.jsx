import "./NavBar.css"
export function NavBar(){
    return(
        <div class="header">
            <h1>Secret Family Recipes</h1>
            <label class="toggle">
                <input type="checkbox" />
                <span class="slider"></span>
            </label>
        </div>
    )
} 
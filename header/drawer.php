<!-- Drawer Start -->
<input id="left-menu" value="1" type="checkbox" />
<input id="left-menu-reset" type="reset" />
<div class="left-navigation nav drawer-bg" id="drawerWidth">
    <div class="menuTitel">
        <img src="./images/logo.png" alt="" />
        <h1 class="heading">Ecomclips</h1>
    </div>
    <main>
        <label class="menu-text" for="left-menu">
            <div class="text-logo">
                <img src="./images/logo.png" alt="" />
                <h1 id="left-menu-text" class="h1">Get free audit</h1>
            </div>
        </label>

        <label class="menu-toggle" for="left-menu" onclick="testing(1)">
            <span>&nbsp;</span>
        </label>
        <menu class="menu">
            <div class="drawer-form-body">
                <div class="drawer-form">
                    <label for="" class="drawer-label">Name:</label>
                    <input type="text" class="drawer-input" placeholder="Istiuk Ayon" />
                </div>
                <div class="drawer-form">
                    <label for="" class="drawer-label">Email*:</label>
                    <input type="email" class="drawer-input" placeholder="Istiuk@gmail.com" />
                </div>
                <div class="drawer-form">
                    <label for="" class="drawer-label">Phone Number:</label>
                    <input type="text" class="drawer-input" placeholder="000-88809996" />
                </div>
                <div class="drawer-form">
                    <label for="" class="drawer-label">Website:</label>
                    <input type="text" class="drawer-input" placeholder="www.ecomcips.com" />
                </div>
                <div>
                    <select name="" class="drawer-select select-icon">
                        <option value="">Which services are you interested in?</option>
                        <option value="">Data Management</option>
                        <option value="">Sponsor Ad Management</option>
                        <option value="">Creative Graphics Design</option>
                        <option value="">Digital Marketing</option>
                        <option value="">Technical Management</option>
                        <option value="">Customer Services</option>
                        <option value="">Other Services</option>
                    </select>
                </div>
                <div>
                    <textarea name="" id=""
                        placeholder="Please send product link or service related details, so we can audit"
                        class="drawer-textarea"></textarea>
                </div>
                <div>
                    <button type="submit" class="drawer-btn">Submit</button>
                </div>
            </div>
        </menu>
    </main>

</div>
<div id="drawerLayer" onclick="testing(2)">

</div>

<!-- ---- drawer end ---- -->

<script>
function testing(id) {
    if (id == 1) {
        $("#drawerLayer").toggleClass("drawer-layer");
        $("#drawerWidth").toggleClass("drawer-width-add");
        $("#drawerWidth").removeClass("drawer-width-remove");
    }
    if (id == 2) {
        $("#drawerLayer").toggleClass("drawer-layer");
        $("#drawerWidth").removeClass("drawer-width-add");
        $("#drawerWidth").toggleClass("drawer-width-remove");
    }
}
</script>
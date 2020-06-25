
<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="../assets/logo.png" alt="TuSALON" />
      </a>
     
      <a class="navbar-item">
        <b-icon pack="fab" icon="twitter"></b-icon>
      </a>
      <a class="navbar-item">
        <b-icon pack="fab" icon="facebook"></b-icon>
      </a>
       <a class="navbar-item">
        <b-icon pack="fab" icon="instagram"></b-icon>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end ">
        <b-dropdown v-model="navigation" position="is-bottom-left" append-to-body aria-role="menu">
          <a class="navbar-item" slot="trigger" role="button">
            <span>Menu</span>
            <b-icon icon="menu-down"></b-icon>
          </a>

          <b-dropdown-item custom aria-role="menuitem">
            ¡Hola
            <strong><b>Bryan Vislao</b></strong>!
          </b-dropdown-item>
          <hr class="dropdown-divider" />
          <b-dropdown-item has-link aria-role="menuitem">
            <a href="https://google.com" target="_blank">
              <b-icon icon="link"></b-icon>Google (link)
            </a>
          </b-dropdown-item>
          
          <hr class="dropdown-divider" aria-role="menuitem" />
          <b-dropdown-item value="settings">
            <b-icon icon="settings"></b-icon>Settings
          </b-dropdown-item>
          <b-dropdown-item value="logout" aria-role="menuitem">
            <b-icon icon="logout"></b-icon>Logout
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        data() {
            return {
                navigation: 'home'
            }
        }
    }
</script>
<template>
 <!-- better to run with an internet connection ;) -->
	<body>
   	<div id="fh5co-wrap">
      <header id="fh5co-header">
			  <div class="container">
				  <nav class="fh5co-main-nav">
            <div class="navbar-end">
              <div class="navbar-item">
                <div v-if="user">
                  <p stytle = "color:white"> {{user.username}} </p>
                </div>
              </div>
              <div v-if="user" class="navbar-item ">
                <div v-if="user" class="navbar-item has-dropdown is-hoverable">
                  <div class="buttons">
                    <a class = "button is-danger" @click.prevent="logout">
                  Logout
                    </a>
                  </div>
                </div>
              </div>
              <div v-else class="navbar-item has-dropdown ">
                <div class="buttons">
                  <router-link :to="{name: 'PageRegister'}" class="button is-primary">
                    <strong>Sign up</strong>
                  </router-link>
                  <router-link :to="{name: 'PageLogin'}" class="button is-light">
                    Log in
                  </router-link>
                </div>
              </div>
           </div>
				</nav>
			</div>
		</header>
    <div class="fh5co-hero" style="background-image: url(https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60);" data-stellar-background-ratio="0.5">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center fh5co-table">
						<div class="fh5co-intro fh5co-table-cell">
              <div v-if="user">
                 <h1 class = "text-center">Welcome {{user.name}}</h1>
              </div>
							<h3>Made with VueJs by Unclebayotics</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</body>
</template>

<script>
  import {mapGetters } from 'vuex'
  import pageLoader from '@/mixins/pageLoader'

  export default {
    components: {

    },
    mixins: [pageLoader],
    computed: {
      ...mapGetters({
        'user': 'auth/authUser',
      })
    },
    methods: {
      logout () {
        this.$store.dispatch('auth/logout')
         .then(() => {
            this.$router.push('/')
          })
      },
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,500;1,400&display=swap');
p, h1, h2{
  font-family: 'Ubuntu', sans-serif;
}
p{
  color: white;
  margin-top: 50px;
  text-align: right;
}
h3{
  color:rgb(199, 205, 211);
}
fh5co-header nav li {
    font-size: 25px;
    padding: 0;
    margin: 0;
    list-style: none;
    display: inline;
}
 .button {
    margin-bottom: 0.5rem;
    height: 60px;
    width: 100px;
    margin-top: 50px;
    font-size: 15px;
}
.buttons{
  justify-content: right;
}
.button a{
  font-size: 16px;
}
img{
  border-radius: 50%;
    height: 80px;
    width: 80px;
}
</style>
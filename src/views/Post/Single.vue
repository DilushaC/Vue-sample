<template>
	<div class="home">
		<div>
			<Navbar />
		</div>
		<div class="container">
			<div class="row">
				<div class="card rounded col col-md-8 col-lg-6 mx-auto my-4 px-0 shadow-lg mb-2">
					<div class="card-body p-0 rounded mw-auto">
						<div class="d-flex align-items-center p-3 mb-0">
							<div class="flex-shrink-0">
								<div class="rounded-image">
									<img src="https://link.getmailspring.com/link/A2203B8E-54B4-4C0A-94C7-E9EDF1CB880F@getmailspring.com/0?redirect=https%3A%2F%2Flux-we.essap.xyz%2Fobject%2Fcbas%2Fimages%2Favatar%2FChanuxBro.jpg&recipient=ZGlsdXNoYWNAY2hhbnV4YnJvLmNvbQ%3D%3D"/>
								</div>
							</div>
							<div class="flex-column">
								<div class="flex-grow-1 ms-3 h4 mb-1">
									<b>Chanux Bro</b>
								</div>
							</div>
						</div>
						<div class="mt-0 p-3 h5 mb-1 lh-base pt-1">
						<div class="spinner-border text-primary" role="status">
							<span class="visually-hidden">
							<div v-if="this.post.type == 'text' || 'image'">
								{{ this.post.content }}
							</div>
							</span>
						</div>
						</div>
					</div>
				</div>

			</div>

		</div>
	</div>
</template>


<script>
import Navbar from "../../components/Navbar";

export default {
	name: "Single",
	components: {
		Navbar,
	},

	data: () => ({
		post: {},
		loading:{}
	}),

	mounted() {
		/**
		 * Fetch data from the origin API and store in the local
		 * data values for future usage.
		 */
		this.loading=true;
		fetch("https://api.chnx/v1.0/post/" + this.$route.params.id)
			.then((Response) => Response.json())
			.then((Response) => {
				this.post = Response.data.post;
				this.loading=false;
			});
	},

};
</script>

<style scoped>

/****Post content and images stylings******/

.post-image img{

	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;

}
.post {
	margin-top: 50px;
	border: 1px solid rgb(226, 218, 218);
	height: 500px;
	-webkit-box-shadow: 3px 3px 5px 1px #ccc;
	-moz-box-shadow: 3px 3px 5px 1px #ccc;
	box-shadow: 3px 3px 5px 1px #ccc;
	background-color: #c4c4c4;
}
.upper-row {
	padding: 50px;
	text-align: center;
	background: #ffff;
	border-radius: 10px;
}
.post-author {
	font-size: 20px;
	text-align: left;
}

.description {
	text-align: left;
	font-size: 12px;
}

/**
* Card content CSS
*/

.h6 {
	font-size: 12px  !important;
}

.h4 {
	font-size: 16px;
}

.h5 {
	font-size: 13px;
}



</style>

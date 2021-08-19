<template>
	<div class="home">
		<div>
			<Navbar />
		</div>
		<div class="container">
			<div class="row">
				<div class="card rounded col-md-4 offset-md-4 my-4 px-0 shadow-lg">
					<div class="card-body p-0 rounded">
						<div class="d-flex align-items-center p-3 mb-0">
							<div class="flex-column">
								<div class="flex-grow-1 ms-3 h4 mb-1">
									<b>{{ this.discussion.user.username }}</b>
								</div>
								<div class="flex-grow-1 ms-3 h6">{{ formatTimeStamp(this.discussion.timestamps.created) }}</div>
							</div>
						</div>


						<div class="mt-0 p-3 h5 mb-1 lh-base">
							<div v-if="this.discussion.type == 'discussion' || 'question'" >
								{{ this.discussion.content }}
							</div>
						</div>

						<div class="flex-grow-1 ms-3 h6 p-1">
							<h6 v-if="this.discussion.type == 'question'">
								<span  class="badge bg-warning text-dark justify-content-center " >
									ප්‍රශ්න
								</span>
							</h6>
							<h6 v-else>
								<span  class="badge bg-success justify-content-center" >
									සාකච්ඡා
								</span>
							</h6>

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
	name: "Discussion",
	components: {
		Navbar,

	},

	data: () => ({
		discussion: {},

	}),

	mounted() {
		/**
		 * Fetch data from the origin API and store in the local
		 * data values for future usage.
		 */
		fetch("https://api.chanux/v1.0/dis/" + this.$route.params.id)
			.then((Response) => Response.json())
			.then((Response) => {
				this.discussion = Response.data.discussion;
			});
	},

};
</script>

<style scoped>
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
	font-size: 12px !important;
}

.h4 {
	font-size: 16px;
}

.h5 {
	font-size: 13px;
}

</style>

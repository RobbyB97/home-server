import React from 'react'
import {connect} from 'react-redux'

import JobCard from '../content/JobCard'



const Experience = ({dispatch, nav, title}) => (
	<div id="experience">
				Experience component
				<JobCard
					title="Finalsite"
					text="Job"
					image="/assets/images/icons/finalsite.png">
				</JobCard>
		</div>
)



const mapStateToProps = (state) => {
		return {
			nav: state.navigation.nav,
			title: state.title.title,
		}
	}

	export default connect(mapStateToProps)(Experience)
import React from 'react'
import PropTypes from 'prop-types'
import { RepoItem } from './RepoItem'

export const Repos = ({repos}) => {
  //Here we loop through the repos (destrcutured from the passed props) to then display each RepoItem - since it is a list, RepoItem needs an id
  return repos.map(repo => <RepoItem repo={repo} key={repo.id}/>)
}

Repos.PropTypes = {
  repos: PropTypes.array.isRequired
}

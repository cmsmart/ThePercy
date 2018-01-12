import React, { Component } from 'react'
import ProfileCard from './ProfileCard';
import SimpleBarChart from '../components/MusherRaceHistory'
import { SearchFilterContainer } from "./SearchFilterContainer";
import { getMushers } from "../api/mushers";

const data = [
  {
    name: "Magnus Kaltenborn",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtT7JPpHERpawwFSUvX5kSLGlEbCaYPJeqyhOJjB6ci6WtI15"
  },
  {
    name: "	Kristina Disney",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0WFhJaQNuKHE18KXPJg5CoupVT0I94aoH0HiJoR1IFp2Gvg5WVQ"
  },
  {
    name: "Maeva Waterman",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtT7JPpHERpawwFSUvX5kSLGlEbCaYPJeqyhOJjB6ci6WtI15"
  },
  {
    name: "Jason Biasetti",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrk5kYS738Y0wuMtv1LjcSw7Fj5M9Fho2lYDEHHg_ctfpg0DjsCw"
  },
  {
    name: "Nathaniel Hamlyn",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtT7JPpHERpawwFSUvX5kSLGlEbCaYPJeqyhOJjB6ci6WtI15"
  },
  {
    name: "Kyla Boivin",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrk5kYS738Y0wuMtv1LjcSw7Fj5M9Fho2lYDEHHg_ctfpg0DjsCw"
  },
  {
    name: "Pierre Boudreau",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtT7JPpHERpawwFSUvX5kSLGlEbCaYPJeqyhOJjB6ci6WtI15"
  },
  {
    name: "Matt McHugh",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrk5kYS738Y0wuMtv1LjcSw7Fj5M9Fho2lYDEHHg_ctfpg0DjsCw"
  },
  {
    name: "Alexandra Rochat",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtT7JPpHERpawwFSUvX5kSLGlEbCaYPJeqyhOJjB6ci6WtI15"
  },
  {
    name: "Marine Gastard",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrk5kYS738Y0wuMtv1LjcSw7Fj5M9Fho2lYDEHHg_ctfpg0DjsCw"
  },
  {
    name: "Clayton Perry",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtT7JPpHERpawwFSUvX5kSLGlEbCaYPJeqyhOJjB6ci6WtI15"
  },
  {
    name: "Gerry Willomitzer",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrk5kYS738Y0wuMtv1LjcSw7Fj5M9Fho2lYDEHHg_ctfpg0DjsCw"
  },
  {
    name: "Gaetan Pierrard",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtT7JPpHERpawwFSUvX5kSLGlEbCaYPJeqyhOJjB6ci6WtI15"
  },
  {
    name: "Wendy Chung",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrk5kYS738Y0wuMtv1LjcSw7Fj5M9Fho2lYDEHHg_ctfpg0DjsCw"
  }
];


export default class  MushersPage extends Component {
  state = {
    year: null,
    race: null,
    searchQuery: null,
    searchResults: []
  }
  
  handleSearchQuery = (query) => {
    this.setState({ searchQuery: query })
  }

  displaySearchResults = (searchResults) => {
    
  }
  
  componentDidMount() {
    getMushers()
      .then((res) => 
      this.setState({searchResults: res})
    )
  }
  
  componentDidUpdate() {
    console.log(this.state)
  }
  
  render() {
    console.log(this.state.searchResults)
    return <div className="mushers-page">
        <p>Mushers Page</p>
        <SearchFilterContainer {...this.state} handleSearchQuery={this.handleSearchQuery} />
        <div className="field">
          <h2>The Field</h2>
          <div className="myCards">
            {data.map(musher => {
              return <ProfileCard name={musher.name} src={musher.src} />;
            })}
          </div>
        </div>
        <SimpleBarChart />
      </div>;
  }
}

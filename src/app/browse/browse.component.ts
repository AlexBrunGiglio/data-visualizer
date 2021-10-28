import { Component, OnInit } from '@angular/core'
import { SearchBar } from '@nativescript/core'

@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent implements OnInit {
  searchPhrase: string
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
  }

  onSubmit(args) {
    const searchBar = args.object as SearchBar
    console.log(`Searching for ${searchBar.text}`)
  }

  onTextChanged(args) {
    const searchBar = args.object as SearchBar
    console.log(`Input changed! New value: ${searchBar.text}`)
  }

  onClear(args) {
    const searchBar = args.object as SearchBar
    console.log(`Clear event raised`)
  }
}

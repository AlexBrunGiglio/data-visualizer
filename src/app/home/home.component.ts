import { Component, OnInit } from '@angular/core'
import { SearchBar } from '@nativescript/core'

import { DataService, DataItem } from '../shared/data.service'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  items: Array<DataItem>
  searchPhrase: string

  constructor(private _itemService: DataService) { }

  ngOnInit(): void {
    this.items = this._itemService.getItems()
  }


  onSubmit(args) {
    const searchBar = args.object as SearchBar
    console.log(`Searching for ${searchBar.text}`)
    const filteredArray: DataItem[] = this.items.filter(x => x.name === args);
    if (!filteredArray.length)
      return;
    this.items = filteredArray;
    console.log("🚀 ~ HomeComponent ~ onTextChanged ~ this.items", this.items);
  }

  onTextChanged(args) {
    const searchBar = args.object as SearchBar
    console.log(`Input changed! New value: ${searchBar.text}`)
    console.log("🚀 ~ HomeComponent ~ onSubmit ~ this.items", this.items);
  }

  onClear(args) {
    const searchBar = args.object as SearchBar
    console.log(`Clear event raised`)
  }
}

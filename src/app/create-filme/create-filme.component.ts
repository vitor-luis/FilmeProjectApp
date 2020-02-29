import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme/filme.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-filme',
  templateUrl: './create-filme.component.html',
  styleUrls: ['./create-filme.component.css']
})
export class CreateFilmeComponent implements OnInit {
  
  filme: any;

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.filme = {};
  }

  postFilme(frm: FormGroup){
    this.filmeService.postFilmes(this.filme).subscribe(res =>{
      console.log(res);
      frm.reset();
    })
  }
}

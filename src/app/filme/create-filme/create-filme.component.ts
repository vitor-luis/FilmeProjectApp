import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmeService } from '../filme.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Filme } from '../filme.model';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-filme',
  templateUrl: './create-filme.component.html',
  styleUrls: ['./create-filme.component.css']
})

export class CreateFilmeComponent implements OnInit, OnDestroy {
  
  private unsubscribe$ = new Subject<void>();
  public movieForm: FormGroup;

  constructor(
    private filmeService: FilmeService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
      this.movieForm = this.formBuilder.group({
        nome: ['',[Validators.required]],
        descricao: ['',[Validators.required]]
      });
  }

  onSubmit(movieForm){
    this.filmeService.postFilmes(movieForm)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => {
          this.toastr.success(`Filme ${res.nome} adicionado!`, 'Sucesso');
          this.movieForm.reset();
          this.router.navigate(['/filmes']);
        },
        error => {
          this.toastr.error(`Houve algum problema ao adicionar`, 'Erro');
          console.warn('error', error);
        }
      )
  }

  get nome () {return this.movieForm.get('nome')}
  get descricao () {return this.movieForm.get('descricao')}  

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

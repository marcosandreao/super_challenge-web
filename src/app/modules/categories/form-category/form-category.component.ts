import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.scss']
})
export class FormCategoryComponent implements OnInit {

  catForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(private categoryService: CategoryService,
    private router: Router, private activatedRoute: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit(): void {
   
  }

  onSumbit() {
    if (!this.catForm.valid) {
      return;
    }
    this.categoryService.save(this.catForm.value).subscribe(r => {
      this.messageService.show("Category has been created.");
      this.back();
    });
  }

  back() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}

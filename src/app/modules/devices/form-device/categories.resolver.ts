import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Category } from "src/app/core/models/category";
import { CategoryService } from "src/app/core/services/category.service";

@Injectable()
export class CategoryResolver implements Resolve<Category[]> {
    constructor(private categoryService: CategoryService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Category[]> | Promise<Category[]> | Category[] {
        return this.categoryService.list();
    }
}
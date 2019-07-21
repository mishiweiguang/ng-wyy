import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {HomeResolverService} from "./home-resolver.service";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: { title: '发现', keywords: 'home, 发现', description: '首页推 荐音乐' },
    resolve: { homeDatas: HomeResolverService }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HomeResolverService]
})
export class HomeRoutingModule { }

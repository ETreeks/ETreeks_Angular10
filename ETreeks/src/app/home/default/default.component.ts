import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { FooterService } from 'src/app/Services/footer.service';
import { MainService } from 'src/app/Services/main.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  Footer: any = {};
  About: any = {};

  constructor(private footerService2: FooterService ,private aboutadmin2 : AdminService , public MM:MainService) {}

  ngOnInit(): void {
    this.footerService2.footer$.subscribe(data => {
      if (data.length > 0) {
        this.Footer = data[0];
      }
    });
    this.footerService2.getFooterData();

    this.aboutadmin2.about$.subscribe(data => {
      if (data.length > 0) {
        this.About = data[0];
      }
    });
    this.aboutadmin2.getAboutData();

    
    //this.MM.getAllCourses();
    this.MM.getAllAcceptedCourses();
    this.MM.GetAllCategories();
  }







}




// import { Component, OnInit } from '@angular/core';
// import { AdminSearch, AdminService } from 'src/app/Services/admin.service';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
 
// @Component({
//   selector: 'app-report',
//   templateUrl: './report.component.html',
//   styleUrls: ['./report.component.css']
// })
// export class ReportComponent implements OnInit {
//   reservations: AdminSearch[] = [];
 
//   constructor(public admin: AdminService) {}
 
//   ngOnInit(): void {
//     this.admin.getallreservation().subscribe(
//       data => {
//         this.reservations = data; 
//       },
//       error => {
//         console.error('Error retrieving reservations', error);
//       }
//     );
//   }
 
//   generatePdf(): void {
//     const doc = new jsPDF();
//     doc.text('Reservation Report', 14, 16);
//     const head = [['Full Name', 'Course Name', 'Category Name', 'Reservation Date']];
//     const body = this.reservations.map(reservation => [
//       reservation.fullName,
//       reservation.courseName,
//       reservation.categoryname,
//       new Date(reservation.reservationdate).toLocaleString() 
//     ]);
//     (doc as any).autoTable({
//       head: head,
//       body: body,
//       startY: 20
//     });
//     doc.save('reservation_report.pdf');
//   }
  
// }
import { Component, OnInit } from '@angular/core';
import { AdminService, AdminSearch } from 'src/app/Services/admin.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // warning

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  startDate: string = '';
  endDate: string = '';
  reservations: AdminSearch[] = [];
  filteredReservations: AdminSearch[] = [];

  constructor(public adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getallreservation().subscribe(
      data => {
        this.reservations = data;
        this.filteredReservations = [...this.reservations];
      },
      error => {
        console.error('Error retrieving reservations', error);
      }
    );
  }

  onSearch(): void {
    const start = this.startDate ? new Date(this.startDate) : null;
    const end = this.endDate ? new Date(this.endDate) : null;

    this.filteredReservations = this.reservations.filter(reservation => {
      const reservationDate = new Date(reservation.reservationdate);

      if (!start && !end) {
        return true;
      }

      if (!start && end) {
        return reservationDate <= end;
      }

      if (start && !end) {
        return reservationDate >= start;
      }

      if (start && end) {
        return reservationDate >= start && reservationDate <= end;
      }

      return false;
    });
  }

  clearForm(): void {
    this.startDate = '';
    this.endDate = '';
    this.filteredReservations = [...this.reservations];
  }

  generatePdf(): void {
    const doc = new jsPDF();
    doc.text('Reservation Report', 14, 16);
    const head = [['Full Name', 'Course Name', 'Category Name', 'Reservation Date']];
    const body = this.filteredReservations.map(reservation => [
      reservation.fullName,
      reservation.courseName,
      reservation.categoryname,
      new Date(reservation.reservationdate).toLocaleString() 
    ]);
    (doc as any).autoTable({
      head: head,
      body: body,
      startY: 20
    });
    doc.save('reservation_report.pdf');
  }
}

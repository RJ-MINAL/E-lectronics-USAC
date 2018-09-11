import { TestBed, inject } from "@angular/core/testing";

import { CategoryService } from "./category.service";
import { AngularFireModule } from "angularfire2";
import { environment } from "../../../environments/environment";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

describe("CategoryService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule
      ],
      providers: [CategoryService]
    });
  });

  it("Servicio categoria deberia ser creado e inyectado.", inject(
    [CategoryService],
    (service: CategoryService) => {
      expect(service).toBeTruthy();
    }
  ));
});

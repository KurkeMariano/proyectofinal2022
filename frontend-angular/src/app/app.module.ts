//------------------------------------MODULOS------------------------------------
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Auth0ClientService, AuthModule } from '@auth0/auth0-angular';
//------------------------------------MODULOS------------------------------------

//------------------------------------COMPONENTES------------------------------------
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableroComponent } from './tablero/tablero.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { BuscarComponent } from './buscar/buscar.component';
import { BarraRecomendacionComponent } from './barra-recomendacion/barra-recomendacion.component';
import { ActivoComponent } from './activo/activo.component';
import { CardComponent } from './card/card.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
//------------------------------------COMPONENTES------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    TableroComponent,
    ActivoComponent,
    CarrouselComponent,
    BarraRecomendacionComponent,
    FooterComponent,
    NavbarComponent,
    TableroComponent,
    CarrouselComponent,
    BuscarComponent,
    BarraRecomendacionComponent,
    ActivoComponent,
    CardComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      //CAMBIAR DATOS DE M2M, API Y SPA
      domain: "dev-3h2tiekd.us.auth0.com",
      clientId: "VxudccHi4sMvsN1cGIKLNSdaG0B2bZpT",
      //M2MClientId: "dHdo47orvAJbxMVTjCOLyJfHNxjczzlM",
      //M2MClientSecret : "CAjDQePWm49SZX1fAYBZ2LLKHnOLFWEtRW3R9fAHDmT0iUyhVIEwDVcshpGETjm_"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

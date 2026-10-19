import { Component , signal , inject} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../../../core/services/Posts/post.service';



@Component({
  selector: 'app-creat-post',
  imports: [ReactiveFormsModule ],
  templateUrl: './creat-post.component.html',
  styleUrl: './creat-post.component.css',
})
export class CreatPostComponent {

  privacy = signal('Public')
    private _PostService = inject(PostService);
imgFile!: File;
  imgURl = signal<string | ArrayBuffer | null | undefined>('');
  postBody: FormControl = new FormControl();
  postPrivacy: FormControl = new FormControl('public');
holdImage(e: Event) {
    let imageFile = e.target as HTMLInputElement;
    if (imageFile.files && imageFile.files.length > 0) {
      console.log(imageFile.files[0]);
      this.imgFile = imageFile.files[0];
      this.readFile();
    }
  }



  readFile() {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.imgFile);
    fileReader.onload = (e) => {
      this.imgURl.set(e.target?.result);
    };
  }
  creatPost(e: SubmitEvent ) {
    e.preventDefault();
    let formData = new FormData();
    if (this.imgFile) {
      formData.append('image', this.imgFile);
    }
const body = this.postBody.value?.trim();
    if (body) {
      formData.append('body', body);
    }
    formData.append('privacy',this.postPrivacy.value)


    this._PostService.CreatPost(formData).subscribe({
      next: (res) => {
        console.log(res);
        this.imgURl.set(null)
        this._PostService.GetAllPosts().subscribe();
      },
      error: (err) => {
        console.log(err);
          console.log(err.error);

      },
    });
  }
}

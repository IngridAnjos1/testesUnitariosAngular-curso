import { LikeWidgetComponent } from "./like-widget.component";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {
    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    let component: LikeWidgetComponent = null

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);
        component = fixture.componentInstance;
    })

    it('Should create component', () => {
        expect(component).toBeTruthy();
    });

    it('Should auto-genarete ID when id during ngOnInit when (@Input id) is not assingned', () => {
        fixture.detectChanges();
        expect(component.id).toBeTruthy();
    });

    it('Should NOT auto-genarete ID during ngOnInit when (@Input id) is assigned', () => {
        const someId = 'someId';
        component.id = someId;
        fixture.detectChanges();
        expect(component.id).toBe(someId);
    });

    it(`#${LikeWidgetComponent.prototype.like.name}
        should trigger (@Output liked) emission when called`, () => {
        spyOn(component.liked, 'emit');
        fixture.detectChanges();
        component.like();
        expect(component.liked.emit).toHaveBeenCalled();
    });
});

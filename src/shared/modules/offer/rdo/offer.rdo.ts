import { Expose, Type } from 'class-transformer';
import { OfferType } from '../../../types/offer-type.enum.js';
import { Comfort } from '../../../types/comfort-type.enum.js';
import { UserRdo } from '../../user/rdo/user.rdo.js';

export class OfferRdo {

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public postDate: Date;

  @Expose()
  public city: string;

  @Expose()
  public preview: string;

  @Expose()
  public image: string;

  @Expose()
  public premium: boolean;

  @Expose()
  public favourites: boolean;

  @Expose()
  public rating: number;

  @Expose()
  public type: OfferType;

  @Expose()
  public room: number;

  @Expose()
  public guests: number;

  @Expose()
  public price: number;

  @Expose()
  public comfort: Comfort;

  @Expose({ name: 'userId'})
  @Type(() => UserRdo)
  public user: UserRdo;

  @Expose()
  public commentCount: number;

  @Expose()
  public coordinates: string;

}

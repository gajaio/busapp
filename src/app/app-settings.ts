export class Settings{
    private stationFetchUrl: string;
    private busDetailsUrl: string;

    public getStationFetchUrl(): string{
        return this.stationFetchUrl;
    }

    public setStationFetchUrl(url: string){
        return this.stationFetchUrl = url;
    }

    public getBusDetailsUrl(): string{
        return this.busDetailsUrl;
    }

    public setBusDetailsUrl(url: string){
        return this.busDetailsUrl = url;
    }
}
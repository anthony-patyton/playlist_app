class SongsController < ApplicationController
  before_action :set_artist
  before_action :set_song, only: [ :show, :edit, :update, :destroy ]

  def index
    @songs = @artist.songs
    if @artist.songs.count == 0
      render component: "NoSongs", props: { artist: @artist }
    else
      render component: "Songs", props: { artist: @artist, songs: @songs }
    end
  end

  def show
    render component: "Song", props: { artist: @artist, song: @song }
  end

  def new
    @song = @artist.songs.new
    render component: "NewSong", props: { artist: @artist, song: @song }
  end

  def create
    @song = @artist.songs.new(song_params)

    if @song.save
      redirect_to [ @artist, @song ] # redirect_to
    else
      render component: "NewSong", props: { artist: @artist, song: @song }
    end
  end

  def edit
    render component: "EditSong", props: { artist: @artist, song: @song }
  end

  def update
    if @song.update(song_params)
      redirect_to [ @artist, @song ]
    else
      render component: "EditSong", props: { artist: @artist, song: @song }
    end
  end

  def destroy
    @song.destroy
    redirect_to artist_path(@song)
  end

  private

    def set_artist
      @artist = Artist.find(params[:artist_id])
    end

    def set_song
      @song = Song.find(params[:id])
    end

    def song_params
      params.require(:song).permit(:title)
    end
end
